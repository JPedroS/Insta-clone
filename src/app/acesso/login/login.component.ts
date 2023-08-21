import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from '../../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>;

public exibirPainelCadastro(): void{
  this.exibirPainel.emit('cadastro')
}
public formLogin: FormGroup = new FormGroup({
  'email' : new FormControl(null),
  'senha' : new FormControl(null)
  })

  public loginUsuario(): void{
    /* console.log(this.formulario.value) */
  
    // let login: Login = new Login(
    //   this.formLogin.value.email,
    //   this.formLogin.value.senha
    // )
    // console.log(login )
  }
  

}
