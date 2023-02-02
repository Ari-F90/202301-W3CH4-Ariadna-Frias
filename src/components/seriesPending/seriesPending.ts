/* eslint-disable no-unused-vars */
import { SerieStructure } from '../../models/serie';

import { Component } from '../component/component';

export class SeriesPending extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }

  createTemplate() {
    return ` <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <!--<p class="info">Congrats! You've watched all your series</p>-->
          <ul class="series-list"></ul>
        </section>`;
  }
}
