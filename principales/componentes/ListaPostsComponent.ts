import { OnInit } from "@angular/core";
import { Post } from "./post.service";

@Component({

    selector: 'app.component.html'
    templateUrl: './lista-posts.component.html'
    styleUrl: ['./lista-posts.componentes.css']
})

export class ListaPostsComponent implements OnInit {

    posts: Post[];
    categorias: string[] = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postService.getAllPosts().suscribe(posts => {
            this.posts = posts;
        }

        )
    }
}