export class UserInfo {
  constructor({ profilNameSelector, profilJobSelector }) {
    this._profilName = document.querySelector(profilNameSelector);
    this._profilJob = document.querySelector(profilJobSelector);
  }

  getUserInfo() {
    return {
      profilName: this._profilName.textContent,
      profilJob: this._profilJob.textContent,
    };
  }

  setUserInfo(profilName, profilJob) {
    this._profilName.textContent = profilName;
    this._profilJob.textContent = profilJob;
  }
}
