import { Component, EventEmitter, Output } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0, transform: 'translate(-100px,0'
        }),
        animate('350ms 0.7s ease-in-out')
      ])
    ]),

    trigger('animacao-form', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0, transform: 'translate(100px,0'
        }),
        animate('350ms 0.7s ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent {

  public estadoBanner: string = 'criado'

  public banner: boolean = false

  public estadoForm: string = 'criado'

  public form: boolean = false

  public cadastro: boolean = false

  public login: boolean = false

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false
    this.login = event === 'login' ? true : false
  }

}
