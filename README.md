思ったことや読書の感想などを雑にアップするための個人用ブログアプリです。
ヘッドレスCMSのContentfulを使用しています。
SSGとしてビルドして配信しており、CMS側で記事の追加/変更/削除を行うとWebhookによりGitHub Actionが実行され、ビルドしてS3にデプロイされます。
