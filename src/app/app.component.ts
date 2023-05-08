import { Component } from '@angular/core';
     
class Product{
    title: string;
    done: boolean;
    price: number;
     
    constructor(title: string, price: number) {
  
        this.title = title;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'myapp',
    template: `<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="input-group row">
			<div class="col-md-8">
				<input class="form-control" [(ngModel)]="title" placeholder = "Название" />
			</div>
			<div class="col-md-2">
				<input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
			</div>
			<div class="col-md-2">
				<button class="btn btn-primary" (click)="addItem(title, price)">Добавить</button>
			</div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let product of products">
                    <td>{{product.title}}</td>
                    <td>{{product.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="product.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    title: string = "";
    price: number = 0;
     
    products: Product[] = 
    [
        { title: "Хлеб", done: false, price: 15.9 },
        { title: "Масло", done: false, price: 60 },
        { title: "Картофель", done: true, price: 22.6 },
        { title: "Сыр", done: false, price:310 }
    ];
    addItem(title: string, price: number): void {
         
        if(title==null || title.trim()=="" || price==null)
            return;
        this.products.push(new Product(title, price));
    }
}