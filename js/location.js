const storeData = [
      { district: 'Bayangol', branch: 'Caffe Bene Sansar Center', location: 'Ard Ayush Ave, Microdistrict 4, Khoroo 14, Bayangol District, Ulaanbaatar 16066', timetable: 'Monday-Friday: 9am-6pm', phone: '94012363' },
      { district: 'Bayangol', branch: 'Caffe Bene Nomin Ikh Delguur', location: 'Nomin Department Store, 1st fl, Enebish Avenue, Bayangol District, Ulaanbaatar 16066', timetable: 'Monday-Friday: 9am-6pm', phone: '75553000/8/' },

      { district: 'Bayanzurkh', branch: 'Caffe Bene Park', location: 'National Park, Ikh Khuree St, Khoroo 26, Bayanzurh, Ulaanbaatar 13313', timetable: 'Monday-Friday: 8am-7pm', phone: '99672363' },
      { district: 'Bayanzurkh', branch: 'Caffe Bene Ikh Mongol', location: 'Ikh Mongol 907, Hunnu St, Khoroo 26, Bayanzurkh, Ulaanbaatar', timetable: 'Monday-Friday: 8am-7pm', phone: '77112363' },

      { district: 'Sukhbaatar', branch: 'Caffe Bene Max Mall', location: 'Max Mall Shopping Center, Peace Avenue 1-35, Ulaanbaatar 16040', timetable: 'Monday-Friday: 10am-5pm', phone: '75553000/2/' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Metro Mall', location: 'Sukhbaatar St., Baga toiruu, Khoroo 6, Sukhbaatar district, Ulaanbaatar 14201', timetable: 'Monday-Friday: 10am-5pm', phone: '95692363' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Shangri La', location: 'Shangri La Center, Olympic Street, Khoroo 1, Sukhbaatar district, Ulaanbaatar 14241', timetable: 'Monday-Friday: 10am-5pm', phone: '75553000/4/	' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Hunsnii 20', location: 'Peace Ave, Khoroo 4, Sukhbaatar District, Ulaanbaatar 14250', timetable: 'Monday-Friday: 10am-5pm', phone: '	75553000/7/	' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Ulaanbaatar Department Store', location: 'Ulaanbaatar Department Store, Peace Ave 57, Sukhbaatar, Ulaanbaatar 14250', timetable: 'Monday-Friday: 10am-5pm', phone: '94032363' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Urgoo 2', location: 'Urgoo 2 Cinema, Baga Toiruu 49, Sukhbaatar district, Ulaanbaatar 14200', timetable: 'Monday-Friday: 10am-5pm', phone: '75553000/9/' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Galleria', location: 'Galleria Ulaanbaatar, Chinggis Square 16,  Khoroo 8, Sukhbaatar District, Ulaanbaatar 14200', timetable: 'Monday-Friday: 10am-5pm', phone: '94802363' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Circus', location: 'Mongolian National Circus, Water street 1, Khoroo 3, Sukhbaatar District, Ulaanbaatar 14252', timetable: 'Monday-Friday: 10am-5pm', phone: '94732363' },
      { district: 'Sukhbaatar', branch: 'Caffe Bene Tanan	', location: 'Tanan center, Khoroo 8, Sukhbaatar district, Ulaanbaatar', timetable: 'Monday-Friday: 10am-5pm', phone: '94842363' },

      { district: 'Khan-Uul', branch: 'Caffe Bene Zaisan Square', location: 'Zaisan Square, Zaisan Toiruu, Khoroo 11, Khan Uul, Ulaanbaatar 17023', timetable: 'Monday-Friday: 8am-7pm', phone: '75553000/3/' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Khan Uul Towe', location: 'Khan Uul Tower, Khoroo 3, Khan Uul district, Ulaanbaatar', timetable: 'Monday-Friday: 8am-7pm', phone: '95022363' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Roastery', location: 'Naadam Center, Khan Uul District, Khoroo 1, Ulaanbaatar 17011', timetable: 'Monday-Friday: 8am-7pm', phone: '75553000/1/' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Khan Tower', location: 'Khan Bank Tower, Chinggis avenue-6, Stadium Orgil-1, Khan-Uul District, Ulaanbaatar 17010', timetable: 'Monday-Friday: 8am-7pm', phone: '95532363' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Gobi', location: 'Gobi Factory Store, Industrial St, Chinggis Ave, Khan Uul, Ulaanbaatar', timetable: 'Monday-Friday: 8am-7pm', phone: '94902363' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Intl School', location: 'Four Seasons Garden, Ikh Mongol St., Khoroo 15, Khan Uul, Ulaanbaatar 17011', timetable: 'Monday-Friday: 8am-7pm', phone: '94652363' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Emart-3	', location: 'Emart Hypermarket, Khoroo 15, Khan Uul, Ulaanbaatar', timetable: 'Monday-Friday: 8am-7pm', phone: '95052363' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Sakura', location: 'Sakura building, 1 floor, Ikh mongol Street Khan Uul discrit, Ulaanbaatar', timetable: 'Monday-Friday: 8am-7pm', phone: '99772363' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Hunnu Mall', location: 'Hunnu Mall, Khan Uul District, Ulaanbaatar 17100', timetable: 'Monday-Friday: 8am-7pm', phone: '75553000/5/	' },
      { district: 'Khan-Uul', branch: 'Caffe Bene Gegeenten', location: 'Gegeenten Complex, Zaisan St., Khan Uul, Ulaanbaatar', timetable: 'Monday-Friday: 8am-7pm', phone: '94942363' },

      { district: 'Chingeltei', branch: 'Caffe Bene Tengis', location: 'Sambuu St 9-3, Khoroo 5, Chingeltei, Ulaanbaatar', timetable: 'Monday-Friday: 10am-5pm', phone: '94182363' },
      { district: 'Chingeltei', branch: 'Caffe Bene State Department Store', location: 'State Department Store, Peace Avenue 25, Chingeltei, Ulaanbaatar 15172', timetable: 'Monday-Friday: 10am-5pm', phone: '75553000/3/' },
      { district: 'Chingeltei', branch: 'Caffe Bene M Plaza', location: 'M Plaza, Sambuu St, Khoroo 5, Chingeltei District, Ulaanbaatar 15141', timetable: 'Monday-Friday: 10am-5pm', phone: '94952363' },
      { district: 'Chingeltei', branch: 'Caffe Bene Bodi Tower', location: 'Jigjidjav St. 3, Khoroo 1, Chingeltei, Ulaanbaatar 15160', timetable: 'Monday-Friday: 10am-5pm', phone: '95172363	' },
      { district: 'Chingeltei', branch: 'Caffe Bene Juulchin St', location: 'Chingeltei District, Juulchin Street, Ulaanbaatar 15170', timetable: 'Monday-Friday: 10am-5pm', phone: '95972363' },
      { district: 'Chingeltei', branch: 'Caffe Bene Gutliin 22', location: 'Gutliin 22, M-100, Juulchin Street, 1-r khoroo, Chingeltei District, Ulaanbaatar 15160', timetable: 'Monday-Friday: 10am-5pm', phone: '94222363' },
      { district: 'Chingeltei', branch: 'Caffe Bene Baga Toiruu	', location: 'Peace Ave, Khoroo 4, Sukhbaatar District, Ulaanbaatar 14250', timetable: 'Monday-Friday: 10am-5pm', phone: '75553000/7/' },

      // Add more store data as needed
  ];

  const districtSelect = document.getElementById('district');
  const branchSelect = document.getElementById('branch');
  const locationSpan = document.getElementById('store-location');
  const timeTableSpan = document.getElementById('time-table');
  const phoneSpan = document.getElementById('phone');

  // Populate the branch drop-down based on the selected district
  districtSelect.addEventListener('change', (event) => {
      const selectedDistrict = event.target.value;
      branchSelect.innerHTML = ''; // Clear previous options

      storeData.forEach(store => {
          if (store.district === selectedDistrict) {
              const option = document.createElement('option');
              option.value = store.branch;
              option.textContent = store.branch;
              branchSelect.appendChild(option);
          }
      });
  });

  // Update store information when a branch is selected
  branchSelect.addEventListener('change', (event) => {
      const selectedBranch = event.target.value;
      const selectedStore = storeData.find(store => store.branch === selectedBranch);
      locationSpan.textContent = selectedStore.location;
      timeTableSpan.textContent = selectedStore.timetable;
      phoneSpan.textContent = selectedStore.phone;
  });

  // Assuming you have selectedStore and iframe variables defined


const iframe = document.getElementById('google-maps-iframe');

// Update the iframe source with the selected cafe name
iframe.src = `https://maps.google.com/maps?width=720&height=720&hl=en&q=${encodeURIComponent(selectedStore.branch)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

