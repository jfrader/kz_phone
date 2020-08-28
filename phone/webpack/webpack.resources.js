//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ResourceManifestPlugin = require("./webpack.fxmanifest.plugin");

module.exports = require("./webpack.common")({
  mode: "production",

  // In production, we skip all hot-reloading stuff
  entry: [path.join(process.cwd(), "src/index.js")],

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ResourceManifestPlugin(),
  ],

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
