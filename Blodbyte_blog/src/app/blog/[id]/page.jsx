import Image from "next/image";
import React from "react";
import styles from "./page.module.css"

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur recusandae dicta similique exercitationem saepe
            veritatis sint corrupti quae odit cum nobis, quod nisi! Pariatur sed
            hic quo ea. Mollitia maiores, consectetur sunt voluptas amet maxime!
          </p>
          <div className={styles.author}>
            <Image
              src="/about.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jone Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/about.jpeg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique impedit rem obcaecati nesciunt consequuntur dolor quo tempora eligendi, a illum in soluta vitae ratione culpa consectetur temporibus facilis unde, qui nostrum incidunt labore ea. Dolore aperiam magnam cumque sunt culpa molestias veritatis, quis enim numquam atque ullam hic dolor ipsa nihil dignissimos voluptates esse, perspiciatis facilis adipisci harum nostrum sequi neque, repellendus illum. Sit velit beatae, eius corporis optio cumque dolorem inventore temporibus fugiat natus dignissimos ipsum itaque enim voluptatum, exercitationem, quae dolores laborum in veritatis illum consequatur. In impedit consequatur mollitia corrupti incidunt eligendi quia vitae! A assumenda quis nemo excepturi impedit ea consectetur consequuntur voluptates voluptatem magnam recusandae quibusdam dignissimos maxime quam tenetur, ipsa placeat corrupti sapiente nam. Voluptatum iste fugit corporis blanditiis?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
