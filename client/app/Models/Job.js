export default class House {
    constructor({ company, jobTitle, hours, rate, description, id }) {
        // NOTE it is no longer our job to generate Id's
        this.id = id
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description

    }

    get Template() {
        return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <div class="card-body">
              <h4 class="card-title">${this.company} | ${this.jobTitle} | ${this.hours} hours</h4>
              <p class="card-text">${this.description} - $${this.rate.toFixed(2)} per hour</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.jobsController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
    }
}