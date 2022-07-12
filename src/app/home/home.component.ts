import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images = [
    { 
      imageSrc:
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3JxHG122WB7yU-cU743QPY8jshNL3m_ydQ&usqp=CAU  ',
        // 'https://image.shutterstock.com/image-photo/businessman-sitting-front-paper-piggy-260nw-1533479471.jpg',
        'https://media.istockphoto.com/photos/business-people-signing-a-contract-picture-id1362265077?b=1&k=20&m=1362265077&s=170667a&w=0&h=aMHH3zykoGWaThWHDE-YDNjypnIjwnUeK33moDoWp5s=',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        // 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5JE8TNYkpHynT8ZdV-fowLNBD4U5oCBoSg&usqp=CAU',
        // 'https://o.remove.bg/downloads/69b561a3-06bf-4585-8f0a-83066325e3ae/download-removebg-preview.png',
        // 'https://www.smartbugmedia.com/hs-fs/hubfs/lifestyle%20image%20with%20text%20overlay.png?width=1999&name=lifestyle%20image%20with%20text%20overlay.png',
        'https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc=',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        // 'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        // 'https://media.istockphoto.com/photos/young-woman-with-credit-card-and-laptop-picture-id1330967899?k=20&m=1330967899&s=612x612&w=0&h=mz7v-2NVFj4H6SfedVWLC-TJozoSsWD4UL65MBx2gYc=',
        'https://media.istockphoto.com/photos/multiethnic-colleagues-sitting-at-desk-looking-at-laptop-computer-in-picture-id1322139094?k=20&m=1322139094&s=612x612&w=0&h=zrwQ1iT_HJv_opa7XggRUZtMaIvs3_xO1eYMs6Qo11A=',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        // 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIRu6E7PgG5slKx-sXQwzG1r_w8YXUPh9Xg&usqp=CAU',
        // 'https://media.istockphoto.com/photos/smiling-businesswoman-greeting-a-colleague-on-a-meeting-picture-id1365634396?b=1&k=20&m=1365634396&s=170667a&w=0&h=P7_QKblF8bj4c46E4HC4ir1-ExdIijG5gK8ER3uqtcQ=',
        // 'https://media.istockphoto.com/photos/group-of-business-persons-talking-in-the-office-picture-id1365436734?k=20&m=1365436734&s=612x612&w=0&h=m6XqYH0iQNe8IVPl5T0UuL4hTcvAA_5imbdsh5MSwuE=',
        'https://media.istockphoto.com/photos/middle-eastern-and-caucasian-ethnicity-businessmen-talking-indoors-picture-id1186185280?k=20&m=1186185280&s=612x612&w=0&h=5DbRnsCHVc4YMFjboQbks1z6-giI4-lrUy4Ux4VZDOw=',
      imageAlt: 'person2',
    },
  ]

}
