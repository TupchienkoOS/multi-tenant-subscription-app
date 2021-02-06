import React from "react";
import { FinishStep } from "./steps/finish-step";
import { WarningStep } from "./steps/warning-step";
import { ProfileStep } from "./steps/profile-step";
import { AccountStep } from "./steps/account-step";
import { Progress } from "./progress";
import { Navigation } from "./navigation";
import { WizardTitle } from "./wizard-title";

class AddCompWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      values: {
        name: "",
        email: "",
        role: "company",
        password: "",
        confPassword: "",
        termsNPolicy: false,
      },
    };
  }

  onChangeInput = (event) => {
    const { values } = this.state;
    const { name, value, checked, type } = event.target;
    const updatedValues = { ...values };
    const inputVal = type === "checkbox" ? checked : value;
    this.setState({
      values: {
        ...updatedValues,
        [name]: inputVal,
      },
    });
  };

  nextStep = () => (event) => {
    this.setState({ step: this.state.step + 1 });
  };

  prevStep = () => (event) => {
    if (this.state.step >= 2) {
      this.setState({ step: this.state.step - 1 });
    }
  };

  getSteps = () => {
    if (this.state.step === 1)
      return <AccountStep values onChangeInput={this.onChangeInput} />;
    else if (this.state.step === 2)
      return <ProfileStep values onChangeInput={this.onChangeInput} />;
    else if (this.state.step === 3) return <WarningStep values />;
    else if (this.state.step === 4) return <FinishStep values />;
  };

  render() {
    return (
      <div className="row.no-paddings">
        <div className="col-lg-12.no-paddings">
          <div className="ibox.no-paddings">
            <WizardTitle />
            <div className="ibox-content">
              <form id="form" action="#" className="wizard-big wizard clearfix">
                <Progress step={this.state.step} />
                {this.getSteps()}
                <Navigation
                  step={this.state.step}
                  nextStep={this.nextStep()}
                  prevStep={this.prevStep()}
                  addCompany={this.props.addCompany}
                  values={this.state.values}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddCompWizard;
