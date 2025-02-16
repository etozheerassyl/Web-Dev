import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  images: string[];
  kaspiLink: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      rating: 4.8,
      price: 549990,
      images: [
        'assets/iphone15.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      rating: 5,
      price: 487369,
      images: [
        'assets/S24.webp'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
      id: 3,
      name: 'PlayStation 5',
      description: 'Игровая приставка Sony PlayStation 5 белый',
      rating: 5,
      price: 313990,
      images: [
        'assets/playstation.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?srsltid=AfmBOoq6MvNoCSBDrdb0M-LRB7SPAhrZ3BG8qjoZQE2OM3NTycGjvl1s'
    },
    {
      id: 4,
      name: 'Xbox Series X',
      description: 'Игровая приставка Xbox',
      rating: 3.9,
      price: 321187,
      images: [
        'assets/xbox.jpeg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-belyi-131268902/?c=750000000'
    },
    {
      id: 5,
      name: 'Dyson Airwrap',
      description: 'Dyson HS05 Airwrap Complete Long Vinca Blue стайлер 1300 Вт',
      rating: 5,
      price: 289000,
      images: [
        'assets/dyson.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-115899989'
    },
    {
      id: 6,
      name: 'Стиральная машина Leadbros',
      description: 'Стиральная машина Leadbros XQG60-1017P черный',
      rating: 5,
      price: 139580,
      images: [
        'assets/wm.jpg',
        'assets/wm2.jpg',
        'assets/wm3.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/leadbros-xqg60-1017p-chernyi-112420396/?c=750000000'
    },
    {
      id: 7,
      name: 'Xiomi phone',
      description: 'смартфон',
      rating: 5,
      price: 777,
      images: [
        'assets/.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-115899989'
    },
    {
      id: 8,
      name: '123',
      description: '199090',
      rating: 5,
      price: 777,
      images: [
        'assets.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-115899989'
    },
    {
      id: 9,
      name: '123',
      description: '123',
      rating: 5,
      price: 777,
      images: [
        'assets/.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-115899989'
    },
    {
      id: 10,
      name: '123',
      description: '123',
      rating: 5,
      price: 777,
      images: [
        'assets/.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-115899989'
    },
  ];

  currentImageIndex: { [key: number]: number } = {};

  ngOnInit() {
    this.products.forEach(product => {
      this.currentImageIndex[product.id] = 0;
    });
  }

  viewOnKaspi(kaspiLink: string) {
    window.open(kaspiLink, '_blank');
  }

  shareOnTelegram(product: Product) {
    const text = `Посмотри этот товар: ${product.name} - ${product.kaspiLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  }

  nextImage(product: Product) {
    this.currentImageIndex[product.id] = 
      (this.currentImageIndex[product.id] + 1) % product.images.length;
  }

  prevImage(product: Product) {
    this.currentImageIndex[product.id] = 
      (this.currentImageIndex[product.id] - 1 + product.images.length) % product.images.length;
  }
}