import {useLocation} from 'react-router-dom';
const AssignementDetails = () => {
    const location = useLocation();
    return ( 
        <div>
            <div>{location.state.name}</div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
				<div class="team-box">
					<div class="team-img">
						<a href="teachers-details.html"><img class="w-100" src="assets/images/team/team-3.png" alt="" /></a>
					</div>
					<div class="team-content-wrap d-flex align-items-center justify-content-between">
						<div class="team-content">
							<h3><a href="teachers-details.html">Noah Emma</a></h3>
							<p>Educoda Manager</p>
						</div>
						<div class="team-social">
							<a href="#"><i class="bx bxl-facebook"></i></a>
						</div>
					</div>
				</div>
			</div>
        </div>
     );
}
 
export default AssignementDetails;