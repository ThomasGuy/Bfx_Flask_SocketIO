from flask import render_template, Blueprint


bp = Blueprint('home', __name__)

@bp.route("/")
@bp.route("/api")
def home():
    title  = 'Home'
    return render_template('index.html', title=title)
