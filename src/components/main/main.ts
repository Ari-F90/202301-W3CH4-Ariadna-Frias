import { Component } from '../component/component';

export class Main extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return ` <main class="main">
      <section class="series">
      <h2 class="section-title">Series list</h2>
       </section>
    </main>
    `;
  }
}
