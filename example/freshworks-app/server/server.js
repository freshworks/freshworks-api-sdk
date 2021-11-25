const { Freshteam } = require('@freshworks/api-sdk');

exports = {

  /**
   * Gets the list of employees
   * 
   * @param {object} args - Server method arguments with employee details
   * @returns {array} - Employees list
   */
  listEmployees: async function(args) {
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    console.log(domain, apiKey);
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    try {
      const employeesList = await FT.employees.list();
      console.log(employeesList);
      renderData(null,  employeesList);
    } catch (error) {
      console.error("Error: Failed to get employees list")
      console.log(error);
      renderData({message: "Error: Failed to get employees list"});
    }
  },

  /**
   * Gets the employee details
   * 
   * @param {object} args - Server method arguments with employee details
   * @returns {object} - Employee details
   */
  getEmployee: async function(args) {
    console.log(args);
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    try {
      const employee = await FT.employees.get(args.id);
      console.log(employee);
      renderData(null,  employee);
    } catch (error) {
      console.error("Error: Failed to get employee details")
      console.log(error);
      renderData({message: "Error: Failed to get employee details"});
    }
    
  },

  /**
   * Creates an employee
   * 
   * @param {object} args - Server method arguments with employee details
   * @returns {object} - Employee details
   */
  createEmployee: async function(args) {
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    const employee = new FT.models.EmployeeCreate(args.first_name, args.last_name, args.official_email, args.role_ids);

    try {
      const employeeCreate = await FT.employees.create(employee);
      console.log(employeeCreate);
      renderData(null, employeeCreate)
    } catch(e){
      console.log('Error: Create employee api failed');
      console.log(e);
      renderData({message: "Error: Failed to create employee"});
    }
  },

  /**
   * Updates an employee
   * 
   * @param {object} args - Server method arguments with employee details
   * @returns {object} - Employee details
   */
  updateEmployee: async function(args) {
    console.log(args)
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    const employee = new FT.models.EmployeeCreate(args.properties.first_name,
      args.properties.last_name,
      args.properties.official_email,
      args.properties.role_ids);
    try {
      const employeeUpdate = await FT.employees.update(args.properties.id, employee);
      console.log(employeeUpdate);
      renderData(null,  employeeUpdate);
    } catch(e){
      console.log('Error: Update employee api failed');
      console.log(e);
      renderData({message: "Error: Failed to update employee"});
    }
  },

  /**
   * Lists the employee fields
   * 
   * @param {object} args - Server method arguments with employee fields details
   * @returns {array} - Employee fields list
   */
  listEmployeeFields: async function(args) {
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    try {
      const employeeFields = await FT.employees.fields();
      console.log(employeeFields);
      renderData(null,  employeeFields);
    } catch(e){
      console.log('Error: Get employee api failed');
      console.log(e);
      renderData({message: "Error: Failed to list employee fields"});
    }
  },

  /**
   * Gets the employee field details
   * 
   * @param {object} args - Server method arguments with employee field details
   * @returns {object} - Employee field details
   */
  createEmployeeField: async function(args) {
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    const fieldParameters = {
      label: args.data.label,
      type: args.data.type,
      required: args.data.required,
      section_name: args.data.section_name
    }

    try {
      const employeeCreateField = await FT.employees.fields.create(fieldParameters);
      console.log(employeeCreateField);
      renderData(null,  employeeCreateField);
    } catch(e){
      console.log('Error: Get employee api failed');
      console.log(e);
      renderData({message: "Error: Failed to create employee field"});
    }
  }

};