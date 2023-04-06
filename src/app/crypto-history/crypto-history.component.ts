import { Component } from '@angular/core';
import { CryptoOhlcv } from '../crypto-ohlcv';
import { CryptoApiService } from '../crypto-api.service';
import { CryptoResponseOuter } from '../crypto-response-outer';

@Component({
  selector: 'app-crypto-history',
  templateUrl: './crypto-history.component.html',
  styleUrls: ['./crypto-history.component.css']
})
export class CryptoHistoryComponent {
    isReady : boolean = false

    responses : CryptoOhlcv[] = []

    constructor(private srv : CryptoApiService){}
    fetchHistoricalPrices(){
      let url = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10"
      this.srv.fetchHistoryResponse(url).subscribe(
        {

          next : (value : CryptoResponseOuter)=>{
            value.Data.Data.forEach( (value : CryptoOhlcv) => this.responses.push(value)    )
          },


          complete:()=>{this.isReady = true; console.log(this.responses)}
        }
      )
    }
}
