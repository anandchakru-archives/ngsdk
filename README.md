# Ngsdk

Sample url: http://localhost:4300/?iid=GHB5vMBfOgzuyC6Xo3hS&guestfid=host

```sh
npm i @types/jquery firebase @angular/fire angularfire2 moment moment-timezone popper.js jquery bootstrap ngx-markdown @types/file-saver file-saver

ng new ngsdk --style scss --prefix n3 --routing=false --create-application=false
cd ngsdk
ng g application ngsdk-app --style scss --prefix n3 --routing=false
ng g library ngsdk-lib --prefix n3
ng g component components/nav --project=ngsdk-lib --style scss
ng g component components/rsvp --project=ngsdk-lib --style scss
ng g component components/clog --project=ngsdk-lib --style scss
ng g component components/atc --project=ngsdk-lib --style scss
ng g component components/growls --project=ngsdk-lib --style scss

ng g class util/nivite3Model --project=ngsdk-lib

#services
ng g service services/util --project=ngsdk-lib
ng g service services/clog --project=ngsdk-lib
ng g service services/atc --project=ngsdk-lib
```

#### Local setup
```sh
#build library with watch flag
ng build ngsdk-lib --watch

#build app
ng serve ngsdk-app --port 4500
```

#### Publish
```sh

./config/all.sh "commit message"

```