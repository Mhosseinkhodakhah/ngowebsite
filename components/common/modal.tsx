import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

function ModalImage({ isOpen, onClose, src }: Props) {
  const t = useTranslations("common");

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      className="h-svh"
    >
      <ModalContent className="flex justify-center items-center h-[80vh]">
        {(onClose) => (
          <>
            <ModalBody>
              <Image
                alt="Doc"
                className="w-[500px] h-[500px] object-contain"
                height={800}
                src={src}
                width={800}
              />
              <div className="flex justify-center gap-2 w-full mx-auto mb-10">
                <Button
                  className="text-white"
                  color="primary"
                  variant="shadow"
                  onPress={onClose}
                >
                  {t("Close")}
                </Button>
                <Button className="text-white" color="success" variant="shadow">
                  <a href={src} download>
                    {t("Download")}
                  </a>
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalImage;
