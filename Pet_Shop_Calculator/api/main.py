from flask import Flask, jsonify,request
from flask_cors import CORS
import datetime

app = Flask(__name__)
cor = CORS(app, origins = '/datapage')
@app.route('/api', methods = ['POST'])


def meu_canino_feliz (weekday, smalls, bigs):
    total = 0;
    if weekday == 0:
        total = smalls*20 + bigs*40

    elif weekday == 1:
        total = (smalls*20 + bigs*40)*1.2
    return total

def vai_rex (weekday, smalls, bigs):
    total = 0;
    if weekday == 0:
        total = smalls*15 + bigs*50

    elif weekday == 1:
        total = smalls*20 + bigs*55
    
    return total;

def chow_chawgas (smalls, bigs):
    return smalls*30 + bigs*45

def which_weekday (date):
    data = datetime.datetime.strptime(date, '%d/%m/%Y')
    day = data.weekday()
    
    if day >= 5:
        return 1
    else:
        return 0

def lowest_price(mcf, vr, cc):
    if mcf < vr and mcf < cc:
        return "Meu Canino Feliz", "R$" + str(mcf)
    elif mcf >= vr and mcf < cc:  # vr <= mcf < cc
        return "Vai Rex", "R$" + str(vr)
    elif mcf < vr and mcf >= cc:  # cc <= mcf < vr
        return "Chow Chawgas",  "R$" + str(cc)
    elif mcf >= vr and mcf >= cc:  # cc, vr <= mcf
        if vr < cc:
            return "Vai Rex", "R$" + str(vr)
        else:
            return "Chow Chawgas",  "R$" + str(cc)

def main():

    data = request.get_json() 

    print("Received data:", data)

    date = data.get('date')
    smalls = data.get('smallDogs')
    bigs = data.get('bigDogs')
    
    weekday = which_weekday(date)

    mcf = meu_canino_feliz(weekday, smalls, bigs);
    vr = vai_rex(weekday, smalls, bigs);
    cc = chow_chawgas(smalls, bigs);

    petShop, preco = (lowest_price(mcf, vr, cc))

    # petShop.commit() 
    # preco.commit()
    return jsonify({"petShop": petShop}), jsonify({"preco": preco})

if __name__ == "__main__":
    app.run(debug = True, port = "8080")

# from flask import Flask, jsonify

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return "Hello, Flask!"

# if __name__ == '__main__':
#     app.run(debug=True)