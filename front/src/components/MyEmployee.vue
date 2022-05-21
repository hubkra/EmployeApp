<template>

    <div class="container">
        <h1 class="text-center"> Employee List</h1>
        <table class="table">
            <thead>
                <th>Employee ID </th>
                <th>Name </th>
                <th>email </th>
                <th>JobTitle</th>
                <th>image </th>
            </thead>
            <tbody>
                <tr v-for = "employee in employee" v-bind:key="employee.id">
                    <td>{{employee.id}}</td>
                    <td>{{employee.name}}</td>
                    <td>{{employee.email}}</td>
                    <td>{{employee.jobTitle}}</td>
                    <td>{{employee.imageUrl}}</td>
                    
                </tr>
            </tbody>

        </table>
    </div>

</template>

<script>
import EmployeeSevice from '@/services/EmployeeSevice'
export default {
    name: 'FirmEmployee',
    data(){
        return{
        employee : []
        }
    },
    methods: {
        getEmployees(){
            EmployeeSevice.getEmployees().then((response)=> {
                this.employee = response.data;
            });
        }

    },
    created(){
        this.getEmployees()
    }
}


</script>


<style>

</style>