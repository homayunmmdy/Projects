# Read Me

## Description
This Python script utilizes the gTTS (Google Text-to-Speech) module to convert a given text into speech and save it as an audio file. The generated audio file is then played using the default system player.

## Dependencies
Ensure you have the required dependencies installed by running the following command:

```bash
pip install gtts
```

## Instructions
1. Install the necessary dependencies.
2. Modify the `text_to_speak` variable to include the desired text.
3. Run the script using a Python interpreter.

```bash
python TSS.py
```

## Output
The script will generate an audio file named "output.mp3" containing the speech from the specified text. The system's default audio player will be used to play the generated audio file.

## Notes
- The language of the generated speech is set to English (`lang='en'`), but you can change it to another supported language.
- Ensure your system has an appropriate audio player to play the generated audio file.
- Feel free to customize the script to suit your specific needs, such as changing the output file name or adjusting the text to be spoken.