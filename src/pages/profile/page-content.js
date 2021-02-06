import React from "react";
import CompaniesGrid from "./companies-grid/companies-grid";
import AddCompWizard from "../add-comp-wiz/add-comp-wiz";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DbApi from "../../data/dbApi";
import { WizardTitle } from "../add-comp-wiz/wizard-title";

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddCompWiz: false, companies: [] };
  }

  componentDidMount() {
    this.setState({
      companies: DbApi.getUserCompanies(this.props.user.companies),
    });
  }

  addCompany = (company) => (event) => {
    const companies = this.state.companies;
    companies.push({
      id: companies.length + 1,
      role: company.role,
      name: company.name,
      login: company.email,
    });
    this.setState({ companies, showAddCompWiz: false });
  };

  deleteCompanyOwner = (id) => (event) => {
    let companies = this.state.companies;
    companies = companies.filter((comp) => comp.id !== id);

    this.setState({ companies });

    DbApi.deleteCompanyOwner(id);
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showAddCompWiz: !prevState.showAddCompWiz,
    }));
  };
  render() {
    const { role, user } = this.props;
    return role === "user" ? (
      <div className="wrapper wrapper-content">
        <div className="wrapper wrapper-content animated fadeInRight ecommerce">
          <CompaniesGrid
            user={user}
            showWiz={this.toggleModal}
            companies={this.state.companies}
            deleteCompanyOwner={this.deleteCompanyOwner}
          />
          <Modal
            isOpen={this.state.showAddCompWiz}
            toggle={this.toggleModal}
            backdropClassName={"modal-backdrop show"}
            zIndex={2050}
          >
            <ModalBody>
              <AddCompWizard addCompany={this.addCompany} />
            </ModalBody>
          </Modal>
        </div>
      </div>
    ) : (
      <div>Company</div>
    );
  }
}
export default PageContent;
