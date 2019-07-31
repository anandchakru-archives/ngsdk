# Ngsdk

Sample url: http://localhost:4300/?iid=GHB5vMBfOgzuyC6Xo3hS&guestfid=host

```sh
npm i @types/jquery firebase @angular/fire angularfire2 moment moment-timezone popper.js jquery bootstrap ngx-markdown

ng new ngsdk --style scss --prefix n3 --routing=false --create-application=false
cd ngsdk
ng g application ngsdk-app --style scss --prefix n3 --routing=false
ng g library ngsdk-lib --prefix n3
ng g component components/nav --project=ngsdk-lib --style scss
ng g component components/rsvp --project=ngsdk-lib --style scss
ng g class util/nivite3Model --project=ngsdk-lib

# ng g component components/terms --project=ngsdk-lib --style scss
# ng g component components/privacy --project=ngsdk-lib --style scss
# ng g component components/contactus --project=ngsdk-lib --style scss
# ng g component components/unsubscribe --project=ngsdk-lib --style scss
# ng g component components/styles --project=ngsdk-lib --style scss

#services
ng g service services/util --project=ngsdk-lib

#build library with watch flag
ng build ngsdk-lib --watch

#build app
ng serve ngsdk-app --port 4300
```