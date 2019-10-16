import { Injectable } from '@angular/core';
import { IMovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string

  constructor() { 
    this.baseUrl = BASEURL
  }

  getMovie(): IMovie {
    const movie = MOVIE
    return({
      id: movie.id,
      title: movie.original_title,
      poster: `${BASEURL}${movie.poster_path}`,
      overview: movie.overview,
      release: new Date(movie.release_date),
      runtime: movie.runtime,
      genres: movie.genres.map(genre => genre.name),
      prodCompanies: movie.production_companies.map(company => company.name),
      status: movie.status
    })
  }

}

const BASEURL = `https://image.tmdb.org/t/p/original`

const GENRES = ["fantasy", "adventure", "action", "romance", "comedy"]

const MOVIES = {
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results": [
    {
      "popularity": 588.352,
      "vote_count": 2891,
      "video": false,
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "id": 475557,
      "adult": false,
      "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
        80,
        18,
        53
      ],
      "title": "Joker",
      "vote_average": 8.6,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "release_date": "2019-10-04"
    },
    {
      "popularity": 295.457,
      "vote_count": 2930,
      "video": false,
      "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      "id": 420818,
      "adult": false,
      "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
      "original_language": "en",
      "original_title": "The Lion King",
      "genre_ids": [
        12,
        16,
        18,
        10751
      ],
      "title": "The Lion King",
      "vote_average": 7.1,
      "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      "release_date": "2019-07-19"
    },
    {
      "popularity": 196.897,
      "vote_count": 681,
      "video": false,
      "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
      "id": 559969,
      "adult": false,
      "backdrop_path": "/uLXK1LQM28XovWHPao3ViTeggXA.jpg",
      "original_language": "en",
      "original_title": "El Camino: A Breaking Bad Movie",
      "genre_ids": [
        80,
        18,
        53
      ],
      "title": "El Camino: A Breaking Bad Movie",
      "vote_average": 7.3,
      "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
      "release_date": "2019-10-11"
    },
    {
      "popularity": 171.766,
      "vote_count": 221,
      "video": false,
      "poster_path": "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
      "id": 453405,
      "adult": false,
      "backdrop_path": "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
      "original_language": "en",
      "original_title": "Gemini Man",
      "genre_ids": [
        28,
        53
      ],
      "title": "Gemini Man",
      "vote_average": 5.9,
      "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
      "release_date": "2019-10-11"
    },
    {
      "popularity": 160.307,
      "vote_count": 1569,
      "video": false,
      "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
      "id": 474350,
      "adult": false,
      "backdrop_path": "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
      "original_language": "en",
      "original_title": "It Chapter Two",
      "genre_ids": [
        27
      ],
      "title": "It Chapter Two",
      "vote_average": 7,
      "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
      "release_date": "2019-09-06"
    },
    {
      "popularity": 132.369,
      "vote_count": 4455,
      "video": false,
      "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      "id": 429617,
      "adult": false,
      "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Spider-Man: Far from Home",
      "vote_average": 7.6,
      "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      "release_date": "2019-07-02"
    },
    {
      "popularity": 123.973,
      "vote_count": 2643,
      "video": false,
      "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
      "id": 301528,
      "adult": false,
      "backdrop_path": "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
      "original_language": "en",
      "original_title": "Toy Story 4",
      "genre_ids": [
        12,
        16,
        35,
        14,
        10751
      ],
      "title": "Toy Story 4",
      "vote_average": 7.6,
      "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
      "release_date": "2019-06-21"
    },
    {
      "popularity": 165.323,
      "id": 387837,
      "video": false,
      "vote_count": 2,
      "vote_average": 5.5,
      "title": "House with a Nice View 2",
      "release_date": "2015-05-27",
      "original_language": "ko",
      "original_title": "전망 좋은 집 2",
      "genre_ids": [
        10749,
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "The marriage of Yin Nan and Mei Ai (He Zhixing) has lasted for eight years. The passion and romance at the beginning have already been exhausted by the world. Yin Nan has nothing to do at home all day, waiting for the beauty to make money and come back to raise him. This makes Mei Ai feel very angry. The dual pressures of work and life have made Meiai start to look for excitement in other men. By going to bed with a strange man, Mei love seems to be able to vent a little dissatisfaction with the world. Over time, this has become her habit.  　　Next to Yin Nan’s family, a beautiful woman named Yi Yin (Jin Zhiyuan) was moved. Yi Yin discovered that her boyfriend, who had been with her for many years, actually stole himself and succumbed to his life. By chance, Yin Nan and Yi Yin met, and the two lonely hearts quickly approached. Mei Ai found that Yin Nan’s attitude towards himself was a lot colder, and he began to want to study the reasons behind it.",
      "poster_path": "/1XBMXs1BYj2QGg44qwX5jObJVGh.jpg"
    },
    {
      "popularity": 155.977,
      "vote_count": 1518,
      "video": false,
      "poster_path": "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
      "id": 384018,
      "adult": false,
      "backdrop_path": "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
      "original_language": "en",
      "original_title": "Fast & Furious Presents: Hobbs & Shaw",
      "genre_ids": [
        28
      ],
      "title": "Fast & Furious Presents: Hobbs & Shaw",
      "vote_average": 6.5,
      "overview": "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
      "release_date": "2019-08-02"
    },
    {
      "popularity": 119.954,
      "vote_count": 8211,
      "video": false,
      "poster_path": "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
      "id": 920,
      "adult": false,
      "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
      "original_language": "en",
      "original_title": "Cars",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "title": "Cars",
      "vote_average": 6.7,
      "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
      "release_date": "2006-06-09"
    },
    {
      "popularity": 84.438,
      "vote_count": 8,
      "video": false,
      "poster_path": "/fgw1XkdmSaD226KtIKcdNmysb3X.jpg",
      "id": 101411,
      "adult": false,
      "backdrop_path": "/53mOHTuLtzlzGX7vw6ryQCU0gUC.jpg",
      "original_language": "en",
      "original_title": "23-F: la película",
      "genre_ids": [
        18,
        36
      ],
      "title": "23-F: la película",
      "vote_average": 6,
      "overview": "The failed coup d'état of February 23, 1981, which began with the capture of the Congress of Deputies and ended with the release of parliamentarians, put at serious risk the Spanish democracy.",
      "release_date": "2011-02-23"
    },
    {
      "popularity": 104.278,
      "vote_count": 3733,
      "video": false,
      "poster_path": "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
      "id": 420817,
      "adult": false,
      "backdrop_path": "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
        12,
        35,
        14,
        10749,
        10751
      ],
      "title": "Aladdin",
      "vote_average": 7.1,
      "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      "release_date": "2019-05-24"
    },
    {
      "popularity": 87.387,
      "vote_count": 2931,
      "video": false,
      "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      "id": 458156,
      "adult": false,
      "backdrop_path": "/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg",
      "original_language": "en",
      "original_title": "John Wick: Chapter 3 - Parabellum",
      "genre_ids": [
        28,
        80,
        53
      ],
      "title": "John Wick: Chapter 3 - Parabellum",
      "vote_average": 7.1,
      "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      "release_date": "2019-05-17"
    },
    {
      "popularity": 99.797,
      "vote_count": 1481,
      "video": false,
      "poster_path": "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
      "id": 479455,
      "adult": false,
      "backdrop_path": "/enNSnMYj78ihLmiWrB4K6ymv9ux.jpg",
      "original_language": "en",
      "original_title": "Men in Black: International",
      "genre_ids": [
        28,
        12,
        35,
        878
      ],
      "title": "Men in Black: International",
      "vote_average": 5.9,
      "overview": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
      "release_date": "2019-06-14"
    },
    {
      "popularity": 74.251,
      "vote_count": 2316,
      "video": false,
      "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      "id": 466272,
      "adult": false,
      "backdrop_path": "/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
      "original_language": "en",
      "original_title": "Once Upon a Time... in Hollywood",
      "genre_ids": [
        35,
        18
      ],
      "title": "Once Upon a Time... in Hollywood",
      "vote_average": 7.6,
      "overview": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      "release_date": "2019-07-26"
    },
    {
      "popularity": 87.364,
      "vote_count": 454,
      "video": false,
      "poster_path": "/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
      "id": 522938,
      "adult": false,
      "backdrop_path": "/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
      "original_language": "en",
      "original_title": "Rambo: Last Blood",
      "genre_ids": [
        28,
        53
      ],
      "title": "Rambo: Last Blood",
      "vote_average": 6,
      "overview": "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
      "release_date": "2019-09-20"
    },
    {
      "popularity": 65.88,
      "vote_count": 333,
      "video": false,
      "poster_path": "/7IRy0iHdaS0JI3ng4ZYlk5gLSFn.jpg",
      "id": 506574,
      "adult": false,
      "backdrop_path": "/gzdxeOiO76hDoOSKYCxegj7bk4T.jpg",
      "original_language": "en",
      "original_title": "Descendants 3",
      "genre_ids": [
        28,
        12,
        35,
        10751
      ],
      "title": "Descendants 3",
      "vote_average": 7.7,
      "overview": "The teenagers of Disney's most infamous villains return to the Isle of the Lost to recruit a new batch of villainous offspring to join them at Auradon Prep.",
      "release_date": "2019-08-02"
    },
    {
      "popularity": 68.849,
      "vote_count": 20,
      "video": false,
      "poster_path": "/jf2PkR0Yt0ZRMKqtJzwja7JV2Hk.jpg",
      "id": 71805,
      "adult": false,
      "backdrop_path": "/rp5dh6D0MLOIIVHkugv6Z8gBLwg.jpg",
      "original_language": "no",
      "original_title": "Håkon Håkonsen",
      "genre_ids": [
        12,
        10751
      ],
      "title": "Shipwrecked",
      "vote_average": 6.3,
      "overview": "A young Norwegian boy in 1850s England goes to work as a cabin boy and discovers some of his shipmates are actually pirates.",
      "release_date": "1990-10-12"
    },
    {
      "popularity": 81.445,
      "vote_count": 0,
      "video": false,
      "poster_path": "/4zmIbm4LArnXJ2U1EPiCpA1pJ9K.jpg",
      "id": 582083,
      "adult": false,
      "backdrop_path": "/lSQjKTyW5tS0uiIXnlIe3hFlq6T.jpg",
      "original_language": "ja",
      "original_title": "仮面ライダービルドNEW WORLD　仮面ライダーグリス",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Kamen Rider Build NEW WORLD: Kamen Rider Grease",
      "vote_average": 0,
      "overview": "Deputy Officer of the United Nations Alliance, Simon Marcus, who aims to conquer the world with the terrorist organization Downfall along with the mad scientist Keiji Uraga, attack the Kamen Riders with overwhelming strength. It is only on Kamen Rider Grease that the enemy's abilities did not work. In order to defeat this new enemy and rescue Misora, Kazumi Sawatari must create a new item ... but it is told that it requires the  life of his friends, the Three Crows. The ultimate decision must be made.",
      "release_date": "2019-11-27"
    },
    {
      "popularity": 59.842,
      "vote_count": 65,
      "video": false,
      "poster_path": "/kZMCbp0o46Tsg43omSHNHJKNTx9.jpg",
      "id": 280960,
      "adult": false,
      "backdrop_path": "/8FfD5WXHrJLx0r4expl9IIBMsOW.jpg",
      "original_language": "pt",
      "original_title": "Catarina e os Outros",
      "genre_ids": [
        18,
        9648
      ],
      "title": "Catarina and the others",
      "vote_average": 4.4,
      "overview": "Outside, the first sun rays break the dawn.  Sixteen years old Catarina can't fall asleep.  Inconsequently, in the big city adults are moved by desire...  Catarina found she is HIV positive. She wants to drag everyone else along.",
      "release_date": "2011-03-01"
    }
  ]
}

const MOVIE = {
  "adult": false,
  "backdrop_path": "/dtFiuavnsnl0krJAeSmGAOFAhw2.jpg",
  "belongs_to_collection": {
    "id": 31562,
    "name": "The Bourne Collection",
    "poster_path": "/uIsDj2TvLuF6k1ygJEPwuyQ5pi2.jpg",
    "backdrop_path": "/vA5xMglyZv7yzDTj1qUTU4OvelV.jpg"
  },
  "budget": 120000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 53,
      "name": "Thriller"
    }
  ],
  "homepage": "http://www.jasonbournemovie.com",
  "id": 324668,
  "imdb_id": "tt4196776",
  "original_language": "en",
  "original_title": "Jason Bourne",
  "overview": "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
  "popularity": 16.424,
  "poster_path": "/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
  "production_companies": [
    {
      "id": 862,
      "logo_path": "/udTjbqPmcTbfrihMuLtLcizDEM1.png",
      "name": "The Kennedy/Marshall Company",
      "origin_country": "US"
    },
    {
      "id": 25716,
      "logo_path": null,
      "name": "Captivate Entertainment",
      "origin_country": ""
    },
    {
      "id": 29313,
      "logo_path": "/1whsMqm5kAPxKBhnTlKNcbXBQJK.png",
      "name": "Pearl Street Films",
      "origin_country": "US"
    },
    {
      "id": 31922,
      "logo_path": null,
      "name": "Double Negative",
      "origin_country": ""
    },
    {
      "id": 10338,
      "logo_path": "/el2ap6lvjcEDdbyJoB3oKiYgXu9.png",
      "name": "Perfect World Pictures",
      "origin_country": "CN"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "GB",
      "name": "United Kingdom"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    },
    {
      "iso_3166_1": "CN",
      "name": "China"
    }
  ],
  "release_date": "2016-07-27",
  "revenue": 415484914,
  "runtime": 123,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "You know his name",
  "title": "Jason Bourne",
  "video": false,
  "vote_average": 6.2,
  "vote_count": 3756
}