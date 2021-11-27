/**
 * Lists all employees
 */
function listEmployees(){
  client.request.invoke('listEmployees', {}).then(function(data){
    console.log('success');
    console.log(data);
  }, function(error){
    console.log('error');
    console.log(error);
  });
}

/**
 * Get an employee details
 * 
 * @param {object} employee - Employee details
 */
function getEmployee(employee){
  client.request.invoke('getEmployee', {id: employee.id}).then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
}

/**
 * Create an employee
 * 
 * @param {object} employeeProperties - Employee details
 */
function createEmployee(employeeProperties){
  client.request.invoke('createEmployee', employeeProperties).then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
}

/**
 * Update an employee
 * 
 * @param {object} employeeProperties - Employee details
 */
function updateEmployee(employeeProperties){
  client.request.invoke('updateEmployee', {properties: employeeProperties}).then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
}

/**
 * Lists the employee fields
 */
function listEmployeeFields(){
  client.request.invoke('listEmployeeFields', {}).then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
}

/**
 * Create an employee field
 * 
 * @param {object} employeeFieldProperties - Employee field details
 */
function createEmployeeField(employeeFieldProperties){

  client.request.invoke('createEmployeeField', employeeFieldProperties).then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
}

function addEventListener(){
  const btnListEmployees = document.getElementById('btnListEmployees');
  const btnGetEmployee = document.getElementById('btnGetEmployee');
  const btnCreateEmployee = document.getElementById('btnCreateEmployee');
  const btnUpdateEmployee = document.getElementById('btnUpdateEmployee');
  const btnListEmployeeFields = document.getElementById('btnListEmployeeFields');
  const btnCreateEmployeeField = document.getElementById('btnCreateEmployeeField');

  const employee = {
    id: 6000122459
  }
  const employeeProperties = {
    id: 6000230179,
    first_name: 'John',
    last_name: 'Doe',
    official_email: 'sample@email.com',
    role_ids: [6000116959]
  };
  const employeeFieldProperties = {
    label: 'Additional Phone',
    field_type: 'text',
    section_name: 'Personal',
    required: true,
    unique: true
  };

  btnListEmployees.addEventListener('click', function(){
    listEmployees();
  });
  btnGetEmployee.addEventListener('click', function(){
    getEmployee(employee);
  });
  btnCreateEmployee.addEventListener('click', function(){
    createEmployee(employeeProperties);
  });
  btnUpdateEmployee.addEventListener('click', function(){
    updateEmployee(employeeProperties);
  });
  btnListEmployeeFields.addEventListener('click', function(){
    listEmployeeFields();
  });
  btnCreateEmployeeField.addEventListener('click', function(){
    createEmployeeField(employeeFieldProperties);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  app.initialized().then(function(_client) {
    window.client = _client;
    client.events.on('app.activated', function() {
      addEventListener();
    });
  });
});
