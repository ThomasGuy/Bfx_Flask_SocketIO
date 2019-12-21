from flask import render_template, Blueprint


bp = Blueprint('ticker', __name__)

@bp.route("/api/ticker")
def ticker():
    title= 'BFX Tickers'
    return render_template('ticker/ticker.html', title=title)
