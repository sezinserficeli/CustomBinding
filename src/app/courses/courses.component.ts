import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      name: 'Angular',
      author: 'Mosh',
      duration: 30,
      type: 'Free',
      price: 0,
      rating: 3.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'React',
      author: 'Mosh',
      duration: 30,
      type: 'Premium',
      price: 10,
      rating: 4.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Vue',
      author: 'Mosh',
      duration: 30,
      type: 'Free',
      price: 0,
      rating: 3.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      name: 'Node',
      author: 'Mosh',
      duration: 30,
      type: 'Premium',
      price: 10,
      rating: 4.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'MongoDB',
      author: 'Mosh',
      duration: 30,
      type: 'Free',
      price: 0,
      rating: 3.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: 'SQL',
      author: 'Mosh',
      duration: 30,
      type: 'Premium',
      price: 10,
      rating: 4.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 7,
      name: 'Python',
      author: 'Mosh',
      duration: 30,
      type: 'Free',
      price: 0,
      rating: 3.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      name: 'Java',
      author: 'Mosh',
      duration: 30,
      type: 'Premium',
      price: 10,
      rating: 4.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 9,
      name: 'C++',
      author: 'Mosh',
      duration: 30,
      type: 'Free',
      price: 0,
      rating: 3.5,
      desription: 'This is a description of the course',
      image: 'https://picsum.photos/200/300',
    },
  ];

  getTotalCourses() {
    return this.courses.length;
  }

  getTotalFreeCourses() {
    return this.courses.filter((course) => course.type === 'Free').length;
  }

  getTotalPremiumCourses() {
    return this.courses.filter((course) => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
  }
}
