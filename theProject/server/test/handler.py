from flask import render_template, Blueprint


bp = Blueprint('test', __name__)


@bp.route("/api/test")
def ticker():
    title = 'Test SocketIO'
    return render_template('test/test.html', title=title)
