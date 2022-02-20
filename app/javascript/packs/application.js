// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap";
require("@fortawesome/fontawesome-free")

import { Application } from "stimulus"
import { autoload } from "stimulus/webpack-helpers"

// Look for controllers inside app/javascripts/packs/controllers/
const application = Application.start()
const controllers = require.context("./controllers", true, /\.js$/)
autoload(controllers, application)

Rails.start()
Turbolinks.start()
ActiveStorage.start()
