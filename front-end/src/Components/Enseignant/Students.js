import Navigation from "../Navbar";
const StudentsList = () => {
    return ( 
        <div className="listContent">
            <Navigation />
            <div class="container mt-5">

            <table class="table table-borderless table-responsive card-1 p-4">
  <thead>
    <tr class="border-bottom">
      <th>
          <span class="ml-2">Birth</span>
      </th>
      <th>
          <span class="ml-2">Name</span>
      </th>
      <th>
          <span class="ml-2">Phone</span>
      </th>
      <th>
          <span class="ml-2">Adresse</span>
      </th>
      <th>
          <span class="ml-4">Action</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-bottom">
      <td>
          <div class="p-2">
              <span class="d-block font-weight-bold">1996</span>
              <small>11/5</small>
          </div>
      </td>
      <td>
           <div class="p-2 d-flex flex-row align-items-center mb-2">
              <img src="https://i.imgur.com/ZSkeqnd.jpg" width="40" class="rounded-circle" />
              <div class="d-flex flex-column ml-2">
                  <span class="d-block font-weight-bold">Fatimezahra Ait Laasri</span>
                  <small class="text-muted">Fati Owner of flower</small>
              </div>
          </div>

      </td>
      <td>
          <div class="p-2">
              <span class="font-weight-bold">0612235399</span>
          </div>
      </td>
      <td>
          <div class="p-2 d-flex flex-column">
              <span>22 RUE VODKA</span>
              <span> TANTAN,MOROCCO</span>
          </div>
      </td>
      <td>
          <div class="p-2 icons">
              <i class="fa fa-phone text-danger"></i>
              <i class="fa fa-adjust text-danger"></i>
              <i class="fa fa-share"></i>
          </div>
      </td>
    </tr>
    








    

  </tbody>
</table>
    
         
     </div>
        </div>
     );
}
 
export default StudentsList;