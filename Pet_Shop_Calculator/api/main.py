from flask import Flask, jsonify,request
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173/datapage', 'http://localhost:5173/resultpage'])
@app.route('/api', methods = ['POST', 'OPTIONS'])


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

    if request.method == 'POST':
        data = request.get_json() 

        date = data.get('date')
        smalls = data.get('smallDogs')
        bigs = data.get('bigDogs')
        
        weekday = which_weekday(date)

        mcf = meu_canino_feliz(weekday, smalls, bigs);
        vr = vai_rex(weekday, smalls, bigs);
        cc = chow_chawgas(smalls, bigs);

        petShop, preco = (lowest_price(mcf, vr, cc))

        return jsonify({"petShop": petShop}, {"preco": preco})
    
    elif request.method == 'OPTIONS':
        return '', 200
if __name__ == "__main__":
    app.run(debug = True, port = "8080")
