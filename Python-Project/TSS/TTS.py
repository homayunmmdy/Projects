# Import the gTTS module
from gtts import gTTS
import os

# Input text that you want to convert to speech
text_to_speak = "Hello, let's explore the world of Text-to-Speech in Python!"

# Create a gTTS object
tts = gTTS(text=text_to_speak, lang='en')

# Save the speech as an audio file
tts.save("output.mp3")

# Play the generated audio file
os.system("start output.mp3")