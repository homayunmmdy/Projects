from flask import Flask, render_template, request , flash , send_file
import os
from gtts import gTTS

app = Flask(__name__)
app.secret_key = "Success"

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    text = request.form['text']
    if not text :
        flash("please enter some text to convert" , 'error')
        return render_template("index.html")
    
    try :
        filename = text_to_speech(text)
        return send_file(filename , as_attachment=True)
    except Exception as e :
        flash(str(e), "error")
        return render_template("index.html")


def text_to_speech(text, language='en', output_folder='static/sounds'):
    os.makedirs(output_folder, exist_ok=True) # Create folder if it doesn't exist

    filename = f"{output_folder}/sound_{len(os.listdir(output_folder)) + 1}.mp3"  # Get unique filename
    tts = gTTS(text=text, lang=language)
    tts.save(filename)
    print(f"Audio saved as: {filename}")

if __name__ == '__main__':
    app.run(debug=True)
