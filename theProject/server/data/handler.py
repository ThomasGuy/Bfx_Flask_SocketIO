from flask import Blueprint
from theProject.server.api.getData import getData


bp = Blueprint('data', __name__)

@bp.route('/api/data')
def send():
    return getData()
