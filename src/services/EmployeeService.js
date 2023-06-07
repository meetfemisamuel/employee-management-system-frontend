import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees" ;


class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService()