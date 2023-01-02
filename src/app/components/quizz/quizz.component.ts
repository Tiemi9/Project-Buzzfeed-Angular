import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"; //importando o quizz_question.json


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title:string = ""

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor() { }

  ngOnInit(): void {


    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title //trazendo o titledo json dinamicamente

      this.questions = quizz_questions.questions //salvando a coleção de perguntas puxadas
      this.questionSelected = this.questions[this.questionIndex] //das questões selecionandas vamos pegar a posição 0

      this.questionIndex = 0  //vamos forçar para sempre iniciar em 0
      this.questionMaxIndex = this.questions.length //vamos pegar a posição máxima de questões que temos

      console.log (this.questionIndex) //printa onde irá começar
      console.log(this.questionMaxIndex) //pribta o número máximo do array
    }
  }
  //vamos capturar qual a escolha do usuário
  playerChoice(value:string) {
    this.answers.push(value)
    this.nextStep()
  }
  //vamos determinar o que será feito após a escolha do usuário (pergunta seguinte ou informar o resultado)
  nextStep(){
    this.questionIndex += 1

    if(this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true
    }
  }
}
