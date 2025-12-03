import { Feature } from "../types";
import antennaIcon from "../assets/icons/antenna.svg";
import bluetoothIcon from "../assets/icons/bluetooth.svg";
import volumeIcon from "../assets/icons/volume.svg";
import moleculeIcon from "../assets/icons/molecular.svg";
import cableIcon from "../assets/icons/cabos.svg";

export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const PRODUCT_FEATURES: Feature[] = [
  {
    icon: antennaIcon,
    title: "Subwoofer Wireless",
    description: null,
  },
  {
    icon: bluetoothIcon,
    title: "Conexão bluetooth",
    description: null,
  },
  {
    icon: volumeIcon,
    title: "300 W RMS potência total",
    description: null,
  },
  {
    icon: moleculeIcon,
    title: "2.1 canais",
    description: null,
  },
  {
    icon: cableIcon,
    title: "Entradas auxiliar (AUX) HDMI (ARC) óptico USB 2.0 | coaxial",
    description: null,
  },
];
