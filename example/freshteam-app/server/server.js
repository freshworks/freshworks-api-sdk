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
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    try {
      const employeesList = await FT.employees.list();
      console.info(employeesList);
      renderData(null,  employeesList);
    } catch (error) {
      console.error("Error: Failed to get employees list")
      console.error(error);
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
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    try {
      const employee = await FT.employees.get(args.id);
      console.info(employee);
      renderData(null,  employee);
    } catch (error) {
      console.error("Error: Failed to get employee details")
      console.error(error);
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

    const employee = new Freshteam.models.EmployeeCreate(args.first_name, args.last_name, args.official_email, args.role_ids);

    try {
      const employeeCreate = await FT.employees.create(employee);
      console.info(employeeCreate);
      renderData(null, employeeCreate)
    } catch(e){
      console.error('Error: Create employee api failed');
      console.error(e);
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
    const domain = args.iparams.freshteam_domain;
    const apiKey = args.iparams.freshteam_api_key;
    const FT = new Freshteam(`${domain}.freshteam.com`, apiKey);

    const employee = new Freshteam.models.EmployeeCreate(args.properties.first_name,
      args.properties.last_name,
      args.properties.official_email,
      args.properties.role_ids);
    try {
      const employeeUpdate = await FT.employees.update(args.properties.id, employee);
      console.info(employeeUpdate);
      renderData(null,  employeeUpdate);
    } catch(e){
      console.error('Error: Update employee api failed');
      console.error(e);
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
      console.info(employeeFields);
      renderData(null,  employeeFields);
    } catch(e){
      console.error('Error: Get employee api failed');
      console.error(e);
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

    const properties = {
      label: args.label,
      required: args.required,
      section_name: args.section_name,
      field_type: args.field_type
    }
    const employeeField = new Freshteam.models.EmployeeFieldCreate(properties);

    try {
      const employeeCreateField = await FT.employees.fields.create(employeeField);
      console.info(employeeCreateField);
      renderData(null,  employeeCreateField);
    } catch(error){
      console.error('Error: Get employee api failed');
      console.error(error);
      renderData({message: "Error: Failed to create employee field"});
    }
  }

};
