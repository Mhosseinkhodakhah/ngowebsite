"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import FilterItems from "./FilterItems";

function FilterModal({ query }: { query: any }) {
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
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("Filter")}
              </ModalHeader>
              <ModalBody className="py-4">
                <FilterItems query={query} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterModal;
