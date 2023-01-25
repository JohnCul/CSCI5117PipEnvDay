from flask import Flask, request, render_template


app = Flask(__name__)

## app.rout returns a function when "/" is called in the url, returns hello_world
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/hi', methods=['GET'])
def hi():
  user_name = request.args.get("userName", "unknown")
  return render_template('main2.html', user=user_name) 