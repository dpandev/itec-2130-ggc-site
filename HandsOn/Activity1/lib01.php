<?php
  function drawTrapezoid($top, $bottom, $symbol) {
    for ($row=$top-1; $row<$bottom; $row++) {
      for($x=0; $x<($row+1); $x++) {
        echo $symbol;
      }
      echo "<br>";
    }
  }
  
  function drawMoonPhase($datetime = null) {
    // Use provided datetime or current time
    $timestamp = $datetime ? strtotime($datetime) : time();
    
    // Known new moon reference: January 6, 2000, 18:14 UTC
    $knownNewMoon = 947182440;
    $lunarCycle = 29.530588853; // Average lunar cycle in days
    
    // Calculate days since known new moon
    $daysSinceNewMoon = ($timestamp - $knownNewMoon) / 86400;
    
    // Calculate current phase (0 = new moon, 0.5 = full moon, 1 = new moon again)
    $phase = fmod($daysSinceNewMoon / $lunarCycle, 1);
    if ($phase < 0) $phase += 1;
    
    // Moon drawing parameters
    $width = 15;
    $height = 9;
    $radius = 4.5;
    
    // Determine phase name
    $phaseName = '';
    if ($phase < 0.03 || $phase > 0.97) $phaseName = 'New Moon 🌑';
    elseif ($phase < 0.22) $phaseName = 'Waxing Crescent 🌒';
    elseif ($phase < 0.28) $phaseName = 'First Quarter 🌓';
    elseif ($phase < 0.47) $phaseName = 'Waxing Gibbous 🌔';
    elseif ($phase < 0.53) $phaseName = 'Full Moon 🌕';
    elseif ($phase < 0.72) $phaseName = 'Waning Gibbous 🌖';
    elseif ($phase < 0.78) $phaseName = 'Last Quarter 🌗';
    else $phaseName = 'Waning Crescent 🌘';
    
    echo "<div style='font-family: sans-serif; background: #001; color: #fff; padding: 20px; display: inline-block; border-radius: 8px;'>";
    echo "<div style='text-align: center; font-size: 2em; margin-bottom: 10px;'>$phaseName</div>";
    echo "<div style='text-align: center; font-size: 0.9em;'>";
    echo date('F j, Y g:i A', $timestamp) . " (Phase: " . round($phase * 100, 1) . "%)";
    echo "</div>";
    echo "</div>";
    
    return $phase;
  }

  function sendTextMessage() {
    $responses = [
      "That's interesting! Tell me more.",
      "I totally understand what you mean!",
      "Hmm, let me think about that...",
      "You're absolutely right!",
      "That's a great point!",
      "I've never thought of it that way before.",
      "Cool! What else is on your mind?",
      "Fascinating! Go on...",
      "LOL that's hilarious!",
      "I see what you're saying."
    ];
    
    ?>
    <style>
      .chat-container {
        max-width: 400px;
        margin: 20px auto;
        background: #f5f5f5;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .chat-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px;
        text-align: center;
        font-weight: bold;
      }
      .chat-messages {
        height: 400px;
        overflow-y: auto;
        padding: 15px;
        background: #fff;
      }
      .message {
        margin-bottom: 15px;
        display: flex;
        animation: slideIn 0.3s ease;
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .message.user {
        justify-content: flex-end;
      }
      .message-bubble {
        max-width: 70%;
        padding: 10px 15px;
        border-radius: 18px;
        word-wrap: break-word;
      }
      .message.user .message-bubble {
        background: #667eea;
        color: white;
        border-bottom-right-radius: 4px;
      }
      .message.bot .message-bubble {
        background: #e5e5ea;
        color: #000;
        border-bottom-left-radius: 4px;
      }
      .chat-input-area {
        display: flex;
        padding: 15px;
        background: #fff;
        border-top: 1px solid #ddd;
      }
      .chat-input {
        flex: 1;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 10px 15px;
        font-size: 14px;
        outline: none;
      }
      .chat-input:focus {
        border-color: #667eea;
      }
      .send-btn {
        margin-left: 10px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 18px;
        transition: background 0.2s;
      }
      .send-btn:hover {
        background: #5568d3;
      }
      .send-btn:active {
        transform: scale(0.95);
      }
    </style>
    
    <div class="chat-container">
      <div class="chat-header">Chat with David</div>
      <div class="chat-messages" id="chatMessages">
        <div class="message bot">
          <div class="message-bubble">Hey there! What's on your mind?</div>
        </div>
      </div>
      <div class="chat-input-area">
        <input type="text" class="chat-input" id="chatInput" placeholder="Type a message..." onkeypress="if(event.key==='Enter') sendMessage()">
        <button class="send-btn" onclick="sendMessage()">➤</button>
      </div>
    </div>
    
    <script>
      const responses = <?php echo json_encode($responses); ?>;
      
      function sendMessage() {
        const input = document.getElementById('chatInput');
        const messagesContainer = document.getElementById('chatMessages');
        const messageText = input.value.trim();
        
        if (messageText === '') return;
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.innerHTML = `<div class="message-bubble">${escapeHtml(messageText)}</div>`;
        messagesContainer.appendChild(userMessage);
        
        // Clear input
        input.value = '';
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Bot "typing" delay then response
        setTimeout(() => {
          const botMessage = document.createElement('div');
          botMessage.className = 'message bot';
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          botMessage.innerHTML = `<div class="message-bubble">${randomResponse}</div>`;
          messagesContainer.appendChild(botMessage);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 800);
      }
      
      function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
      }
      
      // Focus input on load
      document.getElementById('chatInput').focus();
    </script>
    <?php
  }

  function showImage($filename) {
    echo "<img src='$filename' alt='Image' style='max-width: 250px; height: auto;'>";
  }
?>