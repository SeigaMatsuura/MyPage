# 松浦星河 / Seiga Matsuura — Personal Research Page

[al-folio](https://github.com/alshedivat/al-folio) (v0.16.3) をベースにした個人研究者ページです。
GitHub Pages で公開されます: https://seigamatsuura.github.io/MyPage/

## ローカルでのプレビュー

```bash
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000/MyPage/
# 「invalid byte sequence in US-ASCII」が出る場合は UTF-8 ロケールで実行:
#   LANG=C.UTF-8 LC_ALL=C.UTF-8 bundle exec jekyll serve
```

## よく編集するファイル

| ファイル | 内容 |
| --- | --- |
| `_config.yml` | サイト全体の設定（タイトル・URL・OGP など） |
| `_data/socials.yml` | メール・Google Scholar・ORCID・GitHub のリンク |
| `_pages/about.md` | トップページ（自己紹介） |
| `_news/*.md` | News のタイムライン項目（1件1ファイル） |
| `_bibliography/papers.bib` | 業績リスト（BibTeX、エントリタイプで自動分類） |
| `_projects/*.md` | Research の各テーマ詳細ページ |
| `assets/json/resume.json` | CV（JSON Resume 形式） |
| `_sass/_themes.scss` | テーマカラー（`--global-theme-color`） |

## TODO（プレースホルダーの差し替え）

- [ ] `assets/img/prof_pic.jpg` に顔写真を配置
- [ ] `_data/socials.yml` の `scholar_userid` / `orcid_id` を記入
- [ ] `_bibliography/papers.bib` を実際の業績に差し替え
- [ ] `_news/` の3件を実際の活動に差し替え
- [ ] `assets/img/research/` の SVG を実際の研究図に差し替え
- [ ] 独自ドメインを使う場合: `CNAME.example` を `CNAME` にリネームしてドメインを記入し、
      `_config.yml` の `url` をそのドメインに・`baseurl` を空に変更

## デプロイ

`main` ブランチへの push で `.github/workflows/deploy.yml` が走り、ビルド結果が
`gh-pages` ブランチに公開されます。リポジトリの Settings → Pages で
「Deploy from a branch: `gh-pages`」を選択してください。
