import React from "react";
import CompaniesGrid from "./companies/companies-grid/companies-grid";
import AddCompWizard from "../pages/add-comp-wiz/add-comp-wiz";
import { Modal, ModalBody } from "reactstrap";
import DbApi from "./../data/dbApi";
import { SpinnerComp } from "./../spinner";

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddCompWiz: false,
      companies: [],
      isLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.setState({
      companies: DbApi.getUserCompanies(this.props.user.companies),
    });
  }

  addCompany = (company) => async (event) => {
    try {
      await DbApi.addCompany(company);
    } catch (err) {
      console.log(err);
      this.setState({ error: "Unable to add company." });
    }
    this.setState({ isLoading: true });
    const companies = this.state.companies;
    companies.push({
      id: companies.length + 1,
      role: company.role,
      name: company.name,
      login: company.email,
    });
    this.setState({ companies, showAddCompWiz: false, isLoading: false });
  };

  deleteCompanyHandle = (id) => async (event) => {
    event.stopPropagation();

    this.setState({ isLoading: true });
    try {
      await DbApi.deleteCompany(id);
      let companies = this.state.companies;
      companies = companies.filter((comp) => comp.id !== id);

      this.setState({ companies });
    } catch (err) {
      console.log(err);
      this.setState({ error: "Unable to delete company." });
    }
    this.setState({ isLoading: false });
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
        {this.state.isLoading ? (
          <SpinnerComp />
        ) : (
          <div className="wrapper wrapper-content animated fadeInRight ecommerce">
            <CompaniesGrid
              user={user}
              showWiz={this.toggleModal}
              companies={this.state.companies}
              deleteCompany={this.deleteCompanyHandle}
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
        )}
      </div>
    ) : (
      <div>Company</div>
    );
  }
}
Companies.displayName = "Companies";
export default Companies;
