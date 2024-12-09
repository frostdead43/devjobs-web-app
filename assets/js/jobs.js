// const mainTitle = document.querySelector('.main-title');
// const form = document.querySelector('form');
// form.addEventListener("submit", function(e) {
//   e.preventDefault();
// })

// function renderPost(data) {
//   mainTitle.innerHTML = ""
//   mainTitle.innerHTML = data.map(x => 
    // `
    //   <div class="card">
    //     <img src="${x.logo}" alt="">
    //      <span>${x.postedAt}</span>
    //      <span>. ${x.contract}</span>
    //      <h3>${x.position}</h3>
    //      <h5>${x.company}</h5>
    //      <h6>${x.location}</h6>
    //   </div>
    // `
//   ).join('')
// }
// renderPost(dataArray)


// searchTitle.addEventListener('submit', search)
// function search() {

//   const searchInput = this.value.toLowerCase()
//   console.log(searchInput);
//   const filterJobs = dataArray.filter(job => job.position.toLowerCase().includes(searchInput))

//   renderPost(filterJobs)
// }
// searchLocation.addEventListener('submit', getLocation)
// function getLocation() {

//   const locationInput = this.value.toLowerCase()
//   const filterLocation = dataArray.filter(job => job.location.toLowerCase().includes(locationInput))

//   renderPost(filterLocation)
// }





const jobList = document.querySelector('.main-title');
const filterForm = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  // if(searchCheckbox.checked) {
  //   console.log("işaretli");
  // }else {
  //   console.log("değil");
  // }
  fullTimeOnly = searchCheckbox.checked;
  render({
    filter: searchTitle.value.toLowerCase(),
    location: searchLocation.value.toLowerCase(),
    fullTimeOnly: fullTimeOnly,
  });
}

filterForm.addEventListener('submit', handleSubmit);

function render({filter = '', location = '', fullTimeOnly = false}) {
  console.log(fullTimeOnly);
  jobList.innerHTML = dataArray
    .filter(x => x.position.toLowerCase().includes(filter) || x.company.toLowerCase().includes(filter))
    .filter(x => x.location.toLowerCase().includes(location))
    .filter(x => {
      if(fullTimeOnly) {
        return x.contract.toLowerCase() === 'full time';
      }
      return true
    })

    .map(x =>     `
      <div class="card">
        <img src="${x.logo}" alt="">
         <span>${x.postedAt}</span>
         <span>. ${x.contract}</span>
         <h3>${x.position}</h3>
         <h5>${x.company}</h5>
         <h6>${x.location}</h6>
      </div>
    `).join('');
}

render({ });