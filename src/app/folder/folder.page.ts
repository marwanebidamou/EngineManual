import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Platform} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public links: any;
  constructor(private activatedRoute: ActivatedRoute,
              private platform: Platform,
              private file: File,
              private ft: FileTransfer,
              private fileOpener: FileOpener,
              private document: DocumentViewer) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    switch (id) {
      case 'belaz':
        this.folder = 'CAMION BELAZ 75180';
        this.links = [
          {
            name: 'Fonctionnement',
            parent: true,
            children: [
              {
                name: 'Circuits hydrauliques',
                parent: false,
                file: 'belaz/1.pdf',
              },
              {
                name: 'Circuit de graissage',
                parent: false,
                file: 'belaz/2.pdf',
              },
              {
                name: 'Moteur thermique',
                parent: false,
                file: 'belaz/3.pdf',
              },
              {
                name: 'Système de pesage',
                parent: false,
                file: 'belaz/4.pdf',
              }
            ]
          },
          {
            name: 'Modes opératoires',
            parent: false,
            file: 'belaz/5.pdf',
          },
          {
            name: 'Catalogue des pièces',
            parent: false,
            file: 'belaz/6.pdf',
          }
        ];
        break;
      case 'komatsu':
        this.folder = 'CAMION KOMATSU 730 E';
        this.links = [
          {
            name: 'Fonctionnement',
            parent: true,
            children: [
              {
                name: 'Circuits hydrauliques',
                parent: false,
                file: 'komatsu/1.pdf',
              },
              {
                name: 'Circuit de graissage',
                parent: false,
                file: 'komatsu/2.pdf',
              },
              {
                name: 'Moteur thermique',
                parent: false,
                file: 'komatsu/3.pdf',
              },
              {
                name: 'Système de pesage',
                parent: false,
                file: 'komatsu/4.pdf',
              }
            ]
          },
          {
            name: 'Modes opératoires',
            parent: true,
            children: [
              {
                name: 'Cabine',
                parent: false,
                file: 'komatsu/modes/1.xlsx',
              },
              {
                name: 'Conduite et essai',
                parent: false,
                file: 'komatsu/modes/2.xlsx',
              },
              {
                name: 'Dépose accumulateur',
                parent: false,
                file: 'komatsu/modes/3.xlsx',
              },
              {
                name: 'Dépose des blocs de frein AR du komatsu',
                parent: false,
                file: 'komatsu/modes/4.xlsx',
              },
              {
                name: 'Dépose des blocs de frein avant',
                parent: false,
                file: 'komatsu/modes/5.xlsx',
              },
              {
                name: 'Dépose freIn parking',
                parent: false,
                file: 'komatsu/modes/6.xlsx',
              },
              {
                name: 'Dépose moteur thermique du camion',
                parent: false,
                file: 'komatsu/modes/7.xlsx',
              },
              {
                name: 'Dépose pompe à eau',
                parent: false,
                file: 'komatsu/modes/8.xlsx',
              },
              {
                name: 'Dépose radiateur',
                parent: false,
                file: 'komatsu/modes/9.xlsx',
              },
              {
                name: 'Dépose selecteur de benne',
                parent: false,
                file: 'komatsu/modes/10.xlsx',
              },
              {
                name: 'Dépose silent blocs de benne',
                parent: false,
                file: 'komatsu/modes/11.xlsx',
              },
              {
                name: 'Dépose vérin de benne komatsu',
                parent: false,
                file: 'komatsu/modes/12.xlsx',
              },
              {
                name: 'Dépose vérin de direction',
                parent: false,
                file: 'komatsu/modes/13.xlsx',
              },
              {
                name: 'Echange hydraire arrière',
                parent: false,
                file: 'komatsu/modes/14.xlsx',
              },
              {
                name: 'Echange hydraire avant',
                parent: false,
                file: 'komatsu/modes/15.xlsx',
              },
              {
                name: 'Echange patin',
                parent: false,
                file: 'komatsu/modes/16.xlsx',
              },
              {
                name: 'Echange pompe de benne komatsu',
                parent: false,
                file: 'komatsu/modes/17.xlsx',
              },
              {
                name: 'Intervention circuit hyd',
                parent: false,
                file: 'komatsu/modes/18.xlsx',
              },
              {
                name: 'Intervention sur benne',
                parent: false,
                file: 'komatsu/modes/19.xlsx',
              },
              {
                name: 'Intervention sur cabine',
                parent: false,
                file: 'komatsu/modes/20.xlsx',
              },
              {
                name: 'Intervention sur réservoir',
                parent: false,
                file: 'komatsu/modes/21.xlsx',
              }
              ,
              {
                name: 'Parrallélisme des roues avant',
                parent: false,
                file: 'komatsu/modes/22.xlsx',
              },
              {
                name: 'Remplissage azote huile des hydraires',
                parent: false,
                file: 'komatsu/modes/23.xlsx',
              },
              {
                name: 'Travaux de depannage',
                parent: false,
                file: 'komatsu/modes/24.xlsx',
              }
              ]
          },
          {
            name: 'Catalogue des pièces',
            parent: false,
            file: 'komatsu/5.pdf',
          }
        ];
        break;
      case 'chargeuse':
        this.folder = 'MACHINE Chargeuse 994 H';
        this.links = [
          {
            name: 'Fonctionnement',
            parent: true,
            children: [
              {
                name: 'Circuits hydrauliques',
                parent: false,
                file: 'sample.pdf',
              },
              {
                name: 'Circuit de graissage',
                parent: false,
                file: 'sample.pdf',
              },
              {
                name: 'Moteur thermique',
                parent: false,
                file: 'sample.pdf',
              }
            ]
          },
          {
            name: 'Modes opératoires',
            parent: false,
            file: 'sample.pdf',
          },
          {
            name: 'Catalogue des pièces',
            parent: false,
            file: 'sample.pdf',
          }
        ];
        break;
      case 'bulldozer':
        this.folder = 'BULLDOZER D11';
        this.links = [
          {
            name: 'Fonctionnement',
            parent: true,
            children: [
              {
                name: 'Circuits hydrauliques',
                parent: false,
                file: 'sample.pdf',
              },
              {
                name: 'Circuit de graissage',
                parent: false,
                file: 'sample.pdf',
              },
              {
                name: 'Moteur thermique',
                parent: false,
                file: 'sample.pdf',
              }
            ]
          },
          {
            name: 'Modes opératoires',
            parent: false,
            file: 'sample.pdf',
          },
          {
            name: 'Catalogue des pièces',
            parent: false,
            file: 'sample.xlsx',
          }
        ];
        break;
      default:
        this.folder = 'Engine Manual';
        break;
    }
  }

  showFile(link) {
    this.openLocalPdf(link.file);
  }

  openLocalPdf(fileName: string) {
    const filePath = this.file.applicationDirectory + 'www/assets';

    const re = /(?:\.([^.]+))?$/;
    const ext = re.exec(fileName)[1];
    let contentType = 'application/pdf';
    if (ext === 'xlsx') {
      contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    }
    if (this.platform.is('android')) {
      const fakeName = Date.now();
      this.file.copyFile(filePath, fileName, this.file.dataDirectory, `${fakeName}.${ext}`)
          .then(result => {
            this.fileOpener.open(result.nativeURL, contentType);
          });
    } else {
      const options: DocumentViewerOptions = {
        title: 'My File'
      };
      this.document.viewDocument(`${filePath}/${fileName}`, contentType, options);
    }
  }
}
