from flask import render_template, Blueprint


err = Blueprint('errors', __name__)


@err.errorhandler(404)
def not_found_error(error):
    return render_template('errors/404.html'), 404

@err.errorhandler(500)
def internal_error(error):
    # db.session.rollback()
    return render_template('errors/500.html'), 500
