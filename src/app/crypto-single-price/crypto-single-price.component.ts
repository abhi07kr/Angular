import { Component } from '@angular/core';
import { CryptoResponse } from '../crypto-response';
import { CryptoApiService } from '../crypto-api.service';

@Component({
  selector: 'app-crypto-single-price',
  templateUrl: './crypto-single-price.component.html',
  styleUrls: ['./crypto-single-price.component.css']
})
export class CryptoSinglePriceComponent {
  isReady : boolean = false
  currency : string = ""
  response! : CryptoResponse

  constructor(private srv : CryptoApiService) {}

  fetchResponse(){
    let url : string = `https://min-api.cryptocompare.com/data/price?fsym=${this.currency}&tsyms=INR,USD,JPY,EUR`
    if (this.currency=="") {
      
      this.srv.fetchResponse("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=INR,USD,JPY,EUR").subscribe(
        {
  
            next : (value : CryptoResponse) => {this.response = value},
            complete : ()=>{this.isReady = true; console.log('FINISHED') }
  
        }
      )
    } else {
      this.srv.fetchResponse(url).subscribe(
        {
  
            next : (value : CryptoResponse) => {this.response = value},
            complete : ()=>{this.isReady = true; console.log('FINISHED') }
  
        }
      )
    }
    
  }
  resetData(){
    this.isReady = false
    this.currency = ""
  }
}
