import { createElement, useContext } from 'react';
import { PaginationTableContext } from '@/lib/context/PaginationTableContext';
import { Box, Fade, Typography } from '@mui/material';
import SearchBox from '../SearchBox';

const PaginationTableHeader = () => {
  const table = useContext(PaginationTableContext);

  if (!table) return null;

  return (
    <Box sx={{ height: '40px' }}>
      {table.selectionRows?.length <= 0 && (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ paddingLeft: '10px' }}>
            {table.options.tableTitle}
          </Typography>
          {table.options.search.active && <SearchBox />}
        </Box>
      )}

      {table.selectionRows?.length > 0 && (
        <Fade in unmountOnExit timeout={600}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              // pt: '5px',
              pl: '10px',
              m: 0,
              backgroundColor:
                table.options.selection.active &&
                table.selectionRows?.length > 0 &&
                table.options.selection.backgroundColor,
            }}
          >
            <Typography>
              <strong>{table.selectionRows?.length}</strong> item selected
            </Typography>
            <Box>
              {table.options.selection?.buttons?.length > 0 &&
                table.selectionRows?.length > 0 &&
                table.options.selection?.buttons?.map((button, index) => {
                  return createElement(
                    button.component,
                    {
                      key: index,
                      style: {
                        // width: '40px',
                        height: '30px',
                        marginRight: '10px',
                      },
                      ...button.props,
                      onClick: () => {
                        button?.props?.onClick(table.selectionRows);
                        table.setSelectionRows([]);
                      },
                    },
                    typeof button?.label === 'object'
                      ? createElement(button.label, {
                          ...button.labelProps,
                        })
                      : typeof button?.label === 'string'
                        ? button.label
                        : `Button ${index}`
                  );
                })}
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default PaginationTableHeader;
