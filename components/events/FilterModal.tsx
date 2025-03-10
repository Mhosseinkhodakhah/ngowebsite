"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import FilterItems from "./FilterItems";

function FilterModal() {
  const t = useTranslations("common");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="md:hidden text-gray"
        color="primary"
        size="sm"
        onPress={onOpen}
      >
        {t("Filter")}
        <Icon height="14" icon="lets-icons:filter" width="14" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("Filter")}
              </ModalHeader>
              <ModalBody>
                <FilterItems />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("Close")}
                </Button>
                <Button className="text-gray" color="primary" onPress={onClose}>
                  {t("Submit")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterModal;
